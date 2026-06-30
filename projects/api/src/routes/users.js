import express from 'express';
import {db} from '../db.ts';
import {nanoid} from 'nanoid';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json( db.data.users );
});

router.post('/', async (req, res, next) => {
  const id = nanoid()
  console.log({id});

  const payload = req.body;
  console.log("payload:", typeof payload, Array.isArray(req.body));

  let totalRecords = db.data.users.push( req.body );
  db.write();

  res.send({status:true});
});


export default router;