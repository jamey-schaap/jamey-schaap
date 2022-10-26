import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  const [hover, SetHover] = useState<boolean>(false);

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox
          onMouseEnter={() => SetHover(true)}
          onMouseLeave={() => SetHover(false)}
        >
          <Image
            src="/svgs/c2.svg"
            alt=""
            width="24"
            height="24"
            style={
              hover
                ? {
                    transition: "200ms ease",
                    transform: hover ? "rotate(20deg)" : "",
                  }
                : { transition: "200ms ease" }
            }
          />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c', sans-serif"
            fontWeight="bold"
            ml={3}
          >
            Jamey Schaap
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;