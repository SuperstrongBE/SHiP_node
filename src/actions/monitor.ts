// import { Tables } from '../../interfaces/pay.posx';
import { loadReader } from '../ship_reader'

const runProcess = async () => {
  const { start,close$, actions$ } = await loadReader()
  start();
  
  actions$.subscribe(async (action) => {

    console.log(action)
      
    })

    close$.subscribe(() => console.log('connection closed'))
    console.log('Monitor is listening')
  
  }

runProcess();
