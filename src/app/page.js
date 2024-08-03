

import Intro from './components/Intro/Intro'
import Fast from './components/Fast/Fast'

import Devices from './components/Devices/Devices';
import Safety from './components/Safety/Safety';
import AboutServices from './components/AboutServices/AboutServices';
import QA from './components/QA/QA';


export default function Home() {

  return (
    <>
      <Intro />
      <Fast />
      <Devices />
      <Safety/>
      <AboutServices/>
      <QA/>
    </>
  );
}
