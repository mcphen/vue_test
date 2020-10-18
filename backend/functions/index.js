const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));



var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testarticle-63ee4.firebaseio.com"
});
const db = admin.firestore();



async function joinsCollectionsHandler(req, res) {
    const binsRef = await db.collection("categories").get();
    const binDataCategorie = binsRef.docs.map(doc => doc.data());
  
    const binsInfoRef = await db.collection("articles").get();
    const binInfoData = binsInfoRef.docs.map(doc => doc.data());

    return res.json(binInfoData);
  
    const data = binDataCategorie.map(bin => {
      const { hardwareId } = bin;
      const det = binInfoData.filter(
        doc => doc.code == hardwareId
      );
      return { ...bin, det };
    });
    res.json(data);
  }
  
  app.get("/twoColectionJoin", joinsCollectionsHandler);
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});


app.post('/api/create', (req, res) => {
    (async () => {
        try {
          await db.collection('items').doc('/' + req.body.id + '/')
              .create({item: req.body.item});
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
});


app.get('/api/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('categories');
            let response = [];
            let resultats = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            console.log(docs);
            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    nom_cat: doc.data().intitule,
                    
                    
                };
                response.push(selectedItem);
            }
            });
           /* for(let resp of response){
                const selItem ={
                    categorie : resp,
                    articles : db.collection("articles").where('categorie','==',resp.id).get()
                }
                resultats.push(selItem);
            }*/
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
});

app.get('/api/categorie_article/:item_id', (req, res) => {
    (async () => {
        try {
            let query =  db.collection("articles").where('categorie','==',req.params.item_id);
            let response = [];
            let resultats = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            console.log(docs);
            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    titre: doc.data().titre,
                    description : doc.data().description,
                    created_at : doc.data().created_at,
                    
                    
                };
                response.push(selectedItem);
            }
            });
           
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
});

exports.app = functions.https.onRequest(app);