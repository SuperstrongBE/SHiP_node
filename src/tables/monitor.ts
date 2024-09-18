// import { Tables } from '../../interfaces/pay.posx';
import { loadReader } from '../ship_reader'

const runProcess = async () => {
  const { start,close$, rows$ } = await loadReader()
  start();
  
  rows$.subscribe(async (row) => {

    console.log(row)
      
    })

    close$.subscribe(() => console.log('connection closed'))
    console.log('Monitor is listening')
  
  }

runProcess();
