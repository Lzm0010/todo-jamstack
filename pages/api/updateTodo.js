import {table, getMinifiedRecord} from './utils/Airtable';

export default async (req, res) => {
  const {id, fields} = req.body;

  try {
    const records = await table.update([
      {id, fields}
    ]);
    
    res.statusCode = 200;
    res.json(getMinifiedRecord(records[0]));
  } catch (err) {
    res.statusCode = 500;
    res.json({msg: 'something went wrong'});
  }

};