import Program from '@/Backend/models/Program';
import connectDB from '../../../Backend/config/db';
const handler = async (req, res) => {
    if (req.method == 'GET') {
        const result = await Program.find();
        res.status(201).json(result);
    }
    if (req.method == 'POST') {
        // console.log(req.body.length);
        // for (var i = 0; i < req.body.length; i++) {
            // const { title, info, path } = req.body[i];
            const { title, info, path } = req.body;
            console.log({ title, info, path });
            const add_tst = new Program({ title, info, path });
            await add_tst.save();
        // }
        res.status(201).json(add_tst);
    }

}
export default connectDB(handler);