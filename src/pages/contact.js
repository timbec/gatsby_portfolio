import React from 'react'; 
import { Link, graphql } from "gatsby"; 

import Layout from "../components/layout";

const ContactPage = () => {

    return (
        <Layout>
        <section>
        <article>
          <h1>Contact Me</h1>

          <div className="entry-content">
            A contact form
          </div>
        </article>
      </section>
      </Layout>
    )
}

export default ContactPage; 