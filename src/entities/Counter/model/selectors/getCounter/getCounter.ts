import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getCounter = (store: StateSchema) => store.counter;
