import React, { useState } from "react";

const MessageParser = ({ children, actions }) => {
  const { validator } = children.props.state;
  const [error, setError] = useState(null);
  const parse = async (message) => {
    if (validator === "email") {
      const restrictedDomains = /(gmail|googlemail|yahoo|hotmail|rediff|ymail)/;
      const emailRegex = new RegExp(
    `\\b[\\w.-]+@((?!${restrictedDomains}).)[\\w.-]+\\.\\w{2,4}\\b`
  );

      if (emailRegex.test(message)) {
        children.props.state.userData.email = message;
        const emails = children.props.state.userData.email;
        console.log(emails);

        try {
          const response = await fetch(
            "http://web3-api-dev.prodevans.com/searchEmail/",
            {
              method: "POST",
              body: JSON.stringify({ email: emails }),
              headers: {
                "Content-Type": "application/json",
                "x-app-id": "Website-Chat Bot",
              },
            }
          );
          const data = await response.json();
          console.log(data);

          if (data.length > 0) {
            console.log(data[0].id);
            actions.setQuery();

            const queries = children.props.state.userData.query;
            console.log(queries);
          } else {
            actions.setName();
          }
          setError(null);
        } catch (error) {
          console.error("Error calling the searchEmail API:", error);
          actions.setError();
          actions.setEmails();
        }
      } else {
        actions.setError();
        actions.setEmails();
      }
    } else if (validator === "name") {
      if (/^.{4,}$/.test(message)) {
        children.props.state.userData.name = message;
        const names = children.props.state.userData.name;
        console.log(names);

        actions.setPhoneNumber(names);
        setError(null);
      } else {
        actions.setError();
        actions.setNames();
      }
    } else if (validator === "phone") {
      if (/^(?:\+91|0)?[6789]\d{9}$/.test(message)) {
        children.props.state.userData.phoneNumber = message;
        const phones = children.props.state.userData.phoneNumber;
        console.log(phones);

        try {
          const response = await fetch(
            "http://web3-api-dev.prodevans.com/createUser/",
            {
              method: "POST",
              body: JSON.stringify({
                title: " ",
                email: children.props.state.userData.email,
                firstname: children.props.state.userData.name,
                lastname: " ",
                phone: phones,
                subject: " ",
                description: "Testing is successful",
              }),
              headers: {
                "Content-Type": "application/json",
                "x-app-id": "Website-Chat Bot",
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (response.ok) {
              actions.setQuery();
            } else {
              actions.setError();
              const names = children.props.state.userData.name;
              actions.setPhoneNumbers(names);
            }
          } else {
            console.error("API request failed with status: " + response.status);
            actions.setError();
            const names = children.props.state.userData.name;
            actions.setPhoneNumbers(names);
          }
        } catch (error) {
          console.error("Error calling the createUser API:", error);
          actions.setError();
          const names = children.props.state.userData.name;
          actions.setPhoneNumbers(names);
        }
      }
    } else if (validator === "query") {
      if (/^.{4,}$/.test(message)) {
        children.props.state.userData.query = message;
        console.log(message);

        try {
          const response = await fetch(
            "http://web3-api-dev.prodevans.com/createTicket/",
            {
              method: "POST",
              body: JSON.stringify({
                title: "Help me!",
                group: "Services & Support",
                customer_id: children.props.state.userData.email,
                web: "I have created this",
                article: {
                  subject: "My Ticket",
                  body: message,
                  type: "web",
                  state: "new",
                },
              }),
              headers: {
                "Content-Type": "application/json",
                "x-app-id": "123",
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            actions.setNo();
          } else {
            console.error("API request failed with status: " + response.status);
          }
        } catch (error) {
          console.error("Error calling the createTicket API:", error);
        }
        actions.askForRating();
      }
    } else if (validator === "end") {
      actions.askForRating();
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
