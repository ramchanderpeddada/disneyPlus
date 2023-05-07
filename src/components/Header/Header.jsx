import { Login, Logo, NavMenu, StyledHeader, UserImg } from "./Styles";
import { auth, provider } from "../firebase";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <StyledHeader>
      <Logo>
        <img src="/images/logo.svg" alt="Disney" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
        </>
      )}
      <UserImg src={userPhoto} alt={userName} />
    </StyledHeader>
  );
};

export default Header;
