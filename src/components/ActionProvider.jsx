import React, { useState } from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //------------------------------------------------PD SERVICES-----------------------------------------------------------//
  const [serviceClicked, setServiceClicked] = useState(false);

  const setServices = () => {
    if (!serviceClicked) {
      const message = createChatBotMessage(
        `Which service can fulfill your needs?`,
        {
          widget: "PdServices",
        }
      );
      updateState(message);
      setServiceClicked(true);
    }
  };

  const [cloudClicked, setCloudClicked] = useState(false);

  const setCloud = () => {
    if (!cloudClicked) {
      const message = createChatBotMessage(
        `Prodevans offers a swift path to the cloud, reducing costs and providing adaptable cloud solutions. Trusted by businesses and governments for diverse infrastructure needs.For more details, please visit: Prodevans Cloud Services.`
      );
      updateState(message);
      registerMessage();
      setCloudClicked(true);
    }
  };

  const [ApplicationClicked, setApplicationClicked] = useState(false);

  const setApplicaton = () => {
    if (!ApplicationClicked) {
      const message = createChatBotMessage(
        `To reduce costs and improve the RoI, Organizations all over the world are adopting cloud technologies. They are also moving legacy applications onto containers.But how and where do organizations begin this journey into Container adoption? There is a severe shortage of skills in this area. Kubernetes and docker are still evolving. Many of the development teams do not have the skill base to use them effectively.\n\nFor more information, go to https://www.prodevans.com/services/modernization`
      );
      updateState(message);
      registerMessage();
      setApplicationClicked(true);
    }
  };

  const [monitorClicked, setMonitorClicked] = useState(false);

  const setMonitor = () => {
    if (!monitorClicked) {
      const message = createChatBotMessage(
        `Our wide ranging experience in cloud computing technology enables us to craft all-inclusive cloud solutions bespoke to you business demand.  Prodevans can help you enable a faster, simpler path to cloud that delivers solutions with lower TCO along with the much needed flexibility to adapt your cloud infrastructure to the future.\n\nFor more information, go to https://www.prodevans.com/services/monitoring`
      );
      updateState(message);
      registerMessage();
      setMonitorClicked(true);
    }
  };

  const [idClicked, setIdClicked] = useState(false);

  const setId = () => {
    if (!idClicked) {
      const message = createChatBotMessage(
        `Prodevans customer experience fuels better engagement and drives revenue and loyalty. It is, therefore, essential for your CIAM to deliver convenience, hyper-personalization, and security tightly coupled to revamp your digital customer experience.\n\nFor more information, go to https://www.prodevans.com/services/identity-access-management`
      );
      updateState(message);
      registerMessage();
      setIdClicked(true);
    }
  };

  const [autoMationClicked, setAutomationClicked] = useState(false);

  const setAutomation = () => {
    if (!autoMationClicked) {
      const message = createChatBotMessage(
        `Automation is minimizing the human assistance in a process or procedure. It enables the organization to automate the process by analyzing and recording data from the current application. It transforms the organization from a manual process to a fast, accurate and reliable automation process.\n\nFor more information, go to https://www.prodevans.com/services/automation`
      );
      updateState(message);
      registerMessage();
      setAutomationClicked(true);
    }
  };

  const [devopsClicked, setDevopsClicked] = useState(false);

  const setDevops = () => {
    if (!devopsClicked) {
      const message = createChatBotMessage(
        `Automating end to end delivery pipeline across cloud platforms for faster time to market, increased efficiency and reduced cost . Our DevOps leverages collaboration, monitoring, tool-chain pipelines, automation and Cloud adoption. With our DevOps as a service offering, we ensure rapid on-boarding of applications by automating end-to-end delivery pipeline and facilitate continuous integration and development across leading cloud platforms.\n\nFor more information, go to https://www.prodevans.com/services/devops-tools-support`
      );
      updateState(message);
      registerMessage();
      setDevopsClicked(true);
    }
  };
  //------------------------------------------------PD PRODUCTS-----------------------------------------------------------//
  const [ProductClicked, setProductClicked] = useState(false);

  const setProducts = () => {
    if (!ProductClicked) {
      const message = createChatBotMessage(
        `Which product are you looking for?`,
        {
          widget: "PdProducts",
        }
      );
      updateState(message);
      setProductClicked(true);
    }
  };

  const [exClicked, setExClicked] = useState(false);

  const setEx = () => {
    if (!exClicked) {
      const message = createChatBotMessage(
        `Pre Configured private cloud platform on OpenStack for Compute,Network & Storage. Know more about our products, go to https://pdcloudex.com/`
      );
      updateState(message);
      registerMessage();
      setExClicked(true);
    }
  };

  const [ivClicked, setIvClicked] = useState(false);

  const setIv = () => {
    if (!ivClicked) {
      const message = createChatBotMessage(
        `One-Stop-Shop for Data Scientists to code,Collaborate, Deploy & Share Machine Learning Models. Know more about our products, go to https://www.iventura.ai/`
      );
      updateState(message);
      registerMessage();
      setIvClicked(true);
    }
  };

  const [ssoClicked, setSsoClicked] = useState(false);

  const setSSO = () => {
    if (!ssoClicked) {
      const message = createChatBotMessage(
        `This is giving SSO description of keycloak. Know more about our products, go to https://www.prodevans.com/products#`
      );
      updateState(message);
      registerMessage();
      setSsoClicked(true);
    }
  };

  const [assessementClicked, setassessementClicked] = useState(false);

  const setAssessmentTools = () => {
    if (!assessementClicked) {
      const message = createChatBotMessage(
        `DevOps Tools.Know more about our products, go to https://devops-tool.prodevans.com/`
      );
      updateState(message);
      registerMessage();
      setassessementClicked(true);
    }
  };
  //------------------------------------------------PD PARTNERS-----------------------------------------------------------//
  const [PartnerClicked, setPartnerClicked] = useState(false);

  const setPartners = () => {
    if (!PartnerClicked) {
      const message = createChatBotMessage(`You can go with our partners`, {
        widget: "PdPartners",
      });
      updateState(message);
      setPartnerClicked(true);
    }
  };
  //------------------------------------------------PD Contact-----------------------------------------------------------//
  const [contactClicked, setContactClicked] = useState(false);

  const setContact = () => {
    if (!contactClicked) {
      const message = createChatBotMessage(`For More Information Contact us:`, {
        widget: "PdContact",
      });
      updateState(message);
      setContactClicked(true);
    }
  };
  //------------------------------------------------UPDATE STATE-----------------------------------------------------------//
  const updateState = (message, validator = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      validator,
    }));
  };
  const setError = () => {
    const message = createChatBotMessage(`Sorry, Enter correct field`);
    updateState(message);
  };
  //--------------------------------------------REGISTER MESSAGE--------------------------------------------------------//
  const registerMessage = () => {
    const messages = createChatBotMessage(`Register with us`, {
      withAvatar: true,
      delay: 4000,
    });
    updateState(messages);

    const enterEmail = createChatBotMessage(
      `Please share your business email below`,
      {
        withAvatar: true,
        delay: 5000,
      }
    );
    updateState(enterEmail, "email");
  };
  //--------------------------------------------USER REGISTER--------------------------------------------------------//

  const setName = () => {
    const message = createChatBotMessage(`Please share your name with us`);
    updateState(message, "name");
  };

  const setNames = () => {
    const message = createChatBotMessage(`Please share your name with us`, {
      withAvatar: true,
      delay: 1000,
    });
    updateState(message, "name");
  };

  const setEmails = () => {
    const message = createChatBotMessage(
      `Please share your business email below`,
      {
        withAvatar: true,
        delay: 1000,
      }
    );
    updateState(message, "email");
  };

  const setEmail = () => {
    const message = createChatBotMessage(
      `Please share your business email below`
    );
    updateState(message, "email");
  };

  const setPhoneNumbers = (names) => {
    const message = createChatBotMessage(
      `${names}, Please share your contact number with country code`,
      {
        withAvatar: true,
        delay: 1000,
      }
    );
    updateState(message, "phone");
  };

  const setPhoneNumber = (names) => {
    const message = createChatBotMessage(
      `${names}, Please share your contact number with country code`
    );
    updateState(message, "phone");
  };

  //--------------------------------------------Asking Rating--------------------------------------------------------//

  const askForRating = () => {
    const message = createChatBotMessage("How would you rate our service?", {
      widget: "RatingWidget",
      withAvatar: true,
      delay: 1000,
    });
    updateState(message, "end");
  };

  const [finalClicked, setFinalClicked] = useState(false);
  const setFinalMessages = () => {
    if (!finalClicked) {
      const message = createChatBotMessage(`Thanks for rating us`);
      updateState(message);
      setFinalClicked(true);
    }
  };

  //--------------------------------------------query--------------------------------------------------------//

  const [queryClicked, setQueryClicked] = useState(false);

  const setQuery = () => {
    if (!queryClicked) {
      const message = createChatBotMessage(
        `How can I help you. Do you have service queries?`,
        {
          widget: "PdQuery",
        }
      );
      updateState(message);

      setQueryClicked(true);
    }
  };

  const [querysClicked, setQuerysClicked] = useState(false);
  const setYes = () => {
    if (!querysClicked) {
      const message = createChatBotMessage(`Please share your queries with us`);
      updateState(message, "query");
      setQuerysClicked(true);
    }
  };
  const [querynClicked, setQuerynClicked] = useState(false);

  const setNo = () => {
    if (!querynClicked) {
      const message = createChatBotMessage(
        `Thank you so much for your time & patience. We will get in touch with you.`
      );
      updateState(message, "end");
      setQuerynClicked(true);
    }
  };

  //--------------------------------------------END--------------------------------------------------------//

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            //register
            registerMessage,
            setPhoneNumber,
            setEmail,
            setName,
            setNames,
            setError,
            setEmails,
            setPhoneNumbers,
            //Options
            setServices,
            setProducts,
            setPartners,
            setContact,
            // Actions for Pd-Services
            setCloud,
            setApplicaton,
            setMonitor,
            setAutomation,
            setDevops,
            setId,
            // Actions for Pd-Products
            setEx,
            setIv,
            setSSO,
            setAssessmentTools,
            //rating,
            askForRating,
            setFinalMessages,
            setQuery,
            setYes,
            setNo,
            setTimeout,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
