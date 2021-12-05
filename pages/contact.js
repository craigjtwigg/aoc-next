import Head from 'next/head'
import ContactForm from "../components/ContactForm"
import { Layout } from "../components/Layout"

const contact = () => {
    return (
        <>
                <Head>
        <title>Alex Ogden Clark: Contact</title>
        <meta name="description" content="Email Alex Ogden Clark via contact form" /> 
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            {<ContactForm />}
        </ Layout>
        </>
    )
}

export default contact
