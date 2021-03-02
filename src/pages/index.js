import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data
const links = [
  {
    text: "Link to app",
    url: "",
    description:
      "This project is made for USEmbassyKG competition by Vladislav Pak",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        NaturalScienceKG
        <br />
        <span style={headingAccentStyles}>— Augmented Reality App for education! </span>
        <span role="img" aria-label="Party popper emojis">
          📚
        </span>
      </h1>

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{...listItemStyles, color: link.color}}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          Privacy Policy Vladislav Pak built the NaturalSciencesKG app as a Free app. This SERVICE
          is provided by Vladislav Pak at no cost and is intended for use as is. This page is used
          to inform visitors regarding my policies with the collection, use, and disclosure of
          Personal Information if anyone decided to use my Service. If you choose to use my Service,
          then you agree to the collection and use of information in relation to this policy. The
          Personal Information that I collect is used for providing and improving the Service. I
          will not use or share your information with anyone except as described in this Privacy
          Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and
          Conditions, which is accessible at NaturalSciencesKG unless otherwise defined in this
          Privacy Policy. Information Collection and Use For a better experience, while using our
          Service, I may require you to provide us with certain personally identifiable information,
          including but not limited to Vladislav Pak. The information that I request will be
          retained on your device and is not collected by me in any way. Log Data I want to inform
          you that whenever you use my Service, in a case of an error in the app I collect data and
          information (through third party products) on your phone called Log Data. This Log Data
          may include information such as your device Internet Protocol (“IP”) address, device name,
          operating system version, the configuration of the app when utilizing my Service, the time
          and date of your use of the Service, and other statistics. Cookies Cookies are files with
          a small amount of data that are commonly used as anonymous unique identifiers. These are
          sent to your browser from the websites that you visit and are stored on your device's
          internal memory. This Service does not use these “cookies” explicitly. However, the app
          may use third party code and libraries that use “cookies” to collect information and
          improve their services. You have the option to either accept or refuse these cookies and
          know when a cookie is being sent to your device. If you choose to refuse our cookies, you
          may not be able to use some portions of this Service. Service Providers I may employ
          third-party companies and individuals due to the following reasons: To facilitate our
          Service; To provide the Service on our behalf; To perform Service-related services; or To
          assist us in analyzing how our Service is used. I want to inform users of this Service
          that these third parties have access to your Personal Information. The reason is to
          perform the tasks assigned to them on our behalf. However, they are obligated not to
          disclose or use the information for any other purpose. Security I value your trust in
          providing us your Personal Information, thus we are striving to use commercially
          acceptable means of protecting it. But remember that no method of transmission over the
          internet, or method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security. Links to Other Sites This Service may contain links to
          other sites. If you click on a third-party link, you will be directed to that site. Note
          that these external sites are not operated by me. Therefore, I strongly advise you to
          review the Privacy Policy of these websites. I have no control over and assume no
          responsibility for the content, privacy policies, or practices of any third-party sites or
          services. Children’s Privacy These Services do not address anyone under the age of 13. I
          do not knowingly collect personally identifiable information from children under 13 years
          of age. In the case I discover that a child under 13 has provided me with personal
          information, I immediately delete this from our servers. If you are a parent or guardian
          and you are aware that your child has provided us with personal information, please
          contact me so that I will be able to do necessary actions. Changes to This Privacy Policy
          I may update our Privacy Policy from time to time. Thus, you are advised to review this
          page periodically for any changes. I will notify you of any changes by posting the new
          Privacy Policy on this page. This policy is effective as of 2021-03-02 Contact Us If you
          have any questions or suggestions about my Privacy Policy, do not hesitate to contact me
          at vpd.vlad@gmail.com. This privacy policy page was created at privacypolicytemplate.net
          and modified/generated by App Privacy Policy Generator
        </li>
      </ul>
      <ul>
        <li>
          Terms & Conditions By downloading or using the app, these terms will automatically apply
          to you – you should make sure therefore that you read them carefully before using the app.
          You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in
          any way. You’re not allowed to attempt to extract the source code of the app, and you also
          shouldn’t try to translate the app into other languages, or make derivative versions. The
          app itself, and all the trade marks, copyright, database rights and other intellectual
          property rights related to it, still belong to Vladislav Pak. Vladislav Pak is committed
          to ensuring that the app is as useful and efficient as possible. For that reason, we
          reserve the right to make changes to the app or to charge for its services, at any time
          and for any reason. We will never charge you for the app or its services without making it
          very clear to you exactly what you’re paying for. The NaturalSciencesKG app stores and
          processes personal data that you have provided to us, in order to provide my Service. It’s
          your responsibility to keep your phone and access to the app secure. We therefore
          recommend that you do not jailbreak or root your phone, which is the process of removing
          software restrictions and limitations imposed by the official operating system of your
          device. It could make your phone vulnerable to malware/viruses/malicious programs,
          compromise your phone’s security features and it could mean that the NaturalSciencesKG app
          won’t work properly or at all. You should be aware that there are certain things that
          Vladislav Pak will not take responsibility for. Certain functions of the app will require
          the app to have an active internet connection. The connection can be Wi-Fi, or provided by
          your mobile network provider, but Vladislav Pak cannot take responsibility for the app not
          working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of
          your data allowance left. If you’re using the app outside of an area with Wi-Fi, you
          should remember that your terms of the agreement with your mobile network provider will
          still apply. As a result, you may be charged by your mobile provider for the cost of data
          for the duration of the connection while accessing the app, or other third party charges.
          In using the app, you’re accepting responsibility for any such charges, including roaming
          data charges if you use the app outside of your home territory (i.e. region or country)
          without turning off data roaming. If you are not the bill payer for the device on which
          you’re using the app, please be aware that we assume that you have received permission
          from the bill payer for using the app. Along the same lines, Vladislav Pak cannot always
          take responsibility for the way you use the app i.e. You need to make sure that your
          device stays charged – if it runs out of battery and you can’t turn it on to avail the
          Service, Vladislav Pak cannot accept responsibility. With respect to Vladislav Pak’s
          responsibility for your use of the app, when you’re using the app, it’s important to bear
          in mind that although we endeavour to ensure that it is updated and correct at all times,
          we do rely on third parties to provide information to us so that we can make it available
          to you. Vladislav Pak accepts no liability for any loss, direct or indirect, you
          experience as a result of relying wholly on this functionality of the app. At some point,
          we may wish to update the app. The app is currently available on iOS – the requirements
          for system(and for any additional systems we decide to extend the availability of the app
          to) may change, and you’ll need to download the updates if you want to keep using the app.
          Vladislav Pak does not promise that it will always update the app so that it is relevant
          to you and/or works with the iOS version that you have installed on your device. However,
          you promise to always accept updates to the application when offered to you, We may also
          wish to stop providing the app, and may terminate use of it at any time without giving
          notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the
          rights and licenses granted to you in these terms will end; (b) you must stop using the
          app, and (if needed) delete it from your device. Changes to This Terms and Conditions I
          may update our Terms and Conditions from time to time. Thus, you are advised to review
          this page periodically for any changes. I will notify you of any changes by posting the
          new Terms and Conditions on this page. These terms and conditions are effective as of
          2021-03-02 Contact Us If you have any questions or suggestions about my Terms and
          Conditions, do not hesitate to contact me at vpd.vlad@gmail.com. This Terms and Conditions
          page was generated by App Privacy Policy Generator
        </li>
      </ul>


      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;
