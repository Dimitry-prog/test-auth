import React, {FC, Fragment} from 'react';
import {navLinks} from "../utils/constants";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../hooks/reduxHooks";

const Navbar: FC = () => {
  const token = useAppSelector(state => state.auth.token);

  return (
    <nav className="w-full min-h-[50px] p-2 sticky bg-gray-500 flex justify-between text-white text-xl">
      <h1>Authentication</h1>
      <ul className="flex gap-4">
        {navLinks.map(link => {
          const {text, path} = link;
          return (
            <Fragment key={text}>
              {path === 'signin' || path === 'signup' ? (
                !token && (
                  <li>
                    <NavLink
                      to={path}
                      className={({isActive}) => isActive ? 'font-bold' : ''}
                    >
                      {text}
                    </NavLink>
                  </li>
                )
              ) : path === 'profile' ? (
                token && (
                  <li>
                    <NavLink
                      to={path}
                      className={({isActive}) => isActive ? 'font-bold' : ''}
                    >
                      {text}
                    </NavLink>
                  </li>
                )
              ) : (
                <li>
                  <NavLink
                    to={path}
                    className={({isActive}) => isActive ? 'font-bold' : ''}
                  >
                    {text}
                  </NavLink>
                </li>
              )}
            </Fragment>
          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;