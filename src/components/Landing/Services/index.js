import React from "react";
import Icon1 from "../../images/svg-6.svg";
import Icon2 from "../../images/svg-7.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServiceIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServiceIcon src={Icon1} />
          <ServicesH2>For Communities</ServicesH2>
          <ServicesP>
            We help you organize the engagements of your event participants.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServiceIcon src={Icon2} />
          <ServicesH2>For Users</ServicesH2>
          <ServicesP>
            On Our platform, find your CoSpaces, join them and participate in
            events!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServiceIcon src={Icon3} />
          <ServicesH2>Find Like Minded People & Network</ServicesH2>
          <ServicesP>We are a Community of communities.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
