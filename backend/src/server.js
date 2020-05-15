import { errors } from 'celebrate';
import app from './app';

app.use(errors());
app.listen(3333);
