import React, { useRef, useCallback, Fragment } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderRouter from "./HeaderRouter";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import TextButton from "../common/TextButton";
import { useToogle } from "@/libs/hooks";
import HeaderLanguage from "./HeaderLanguage";

function Header() {
  const [userMenu, toggleUserMenu] = useToogle(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = usePathname();

  // const onOutsideClick = useCallback(
  //   (e: React.MouseEvent) => {
  //     if (!ref.current) return;
  //     if (ref.current.contains(e.target as any)) return;
  //     toggleUserMenu();
  //   },
  //   [toggleUserMenu]
  // );

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Left>
          <HeaderLogo />
          <HeaderRouter currentUrl={router} />
        </Left>
        <Right>
          {userMenu ? (
            <div></div>
          ) : (
            <Fragment>
              <TextButton
                disabled={userMenu}
                type="button"
                onClick={() => toggleUserMenu()}
                color=""
                sz=""
                className="123"
                active={false}
              >
                LOGIN
              </TextButton>
              <HeaderLanguage />
            </Fragment>
          )}
        </Right>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  height: 60px;
`;

const HeaderWrapper = styled.div`
  width: 1608px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 180px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 60px;
`;

export default Header;
