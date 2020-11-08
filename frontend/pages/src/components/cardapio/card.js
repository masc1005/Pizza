import react from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs'
import style from '../../../../styles/Home.module.css'
import Taste from './cardTaste'
import Drinks from './carDrinks'

export default function Cardapio() {

  return (
    <Tabs>
      <TabList className={style.tabList}>
        <Tab>
          <button id={style.btnTastes}>
            Sabores
          </button>
        </Tab>
        <Tab>
          <button id={style.btnDrinks}>
            Refrigerantes
          </button>
        </Tab>
      </TabList>

      <TabPanel>
        <Taste />
      </TabPanel>
      <TabPanel>
        <Drinks />
      </TabPanel>
    </Tabs>
  )
}