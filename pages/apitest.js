
import styles from '../styles/Home.module.css';
import { ApiTest } from '../components/ApiTest';


export default function apiTestPage({data}) {

  const cmsData = data.data
  return (
    <div className={styles.container}>
{console.log(cmsData)}
<ApiTest cmsData={cmsData}/>

      
    </div>
  );
}


export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/api/photo-sets?populate[images][fields]=url,width,height`)
  const data = await res.json()

  
  return {
    props: { data }, // will be passed to the page component as props
  }
}
