import Head from 'next/head'
import ContactForm from "../components/ContactForm"
import { Layout } from "../components/Layout"

const contact = () => {
    return (
        <>
                <Head>
        <title>Alex Ogden Clark: Contact</title>
        <meta name="description" content="Email Alex Ogden Clark via contact form" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            {<ContactForm />}
        </ Layout>
        </>
    )
}

export default contact
