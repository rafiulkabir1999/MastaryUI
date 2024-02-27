"use client";
import React from "react";
import {
  Menu,
  HomeOutlined,
  SettingsOutlined,
  BrowserUpdatedOutlined,
  FactoryOutlined,
  RestoreOutlined,
  RepartitionOutlined,
  AbcOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";

function SideNav({ children }) {
  const [active, setActive] = useState(null);
  const [menu, setMenu] = useState(true);

  return (
    <div className="overflow-hidden border">
      <div className={``}>
        <div
          onClick={() => setMenu((prev) => !prev)}
          className={` flex items-center gap-2 group  cursor-pointer `}
        >
          <span className={`$ `}>{<Menu />}</span>
        </div>
      </div>
      <div className="flex">
        <aside
          className={`${menu ? "w-0 " : "w-64 block"} border-t transition-all duration-300 ease-in overflow-hidden  py-4 h-screen flex flex-col border-r`}
        >
          <SideNavItem
            icon={HomeOutlined}
            title="Home"
            status={active === 1}
            changeStatus={() => setActive(1)}
          />
          <SideNavItem
            icon={HomeOutlined}
            title="About"
            status={active === 2}
            changeStatus={() => setActive(2)}
          />
          <SideNavContainer
            title="First Menu"
            status={active === 4}
            changeStatus={() => setActive(4)}
          >
            <SideNavItem
              icon={SettingsOutlined}
              title="Edit Profile"
              status={active === 41}
              changeStatus={() => setActive(41)}
            />
            <SideNavItem
              icon={RepartitionOutlined}
              title="Remove "
              status={active === 5}
              changeStatus={() => setActive(5)}
            />
            <SideNavItem
              icon={SettingsOutlined}
              title="Theam"
              status={active === 7}
              changeStatus={() => setActive(7)}
            />

            <SideNavContainer
              title="2nd Menu"
              status={active === 44}
              changeStatus={() => setActive(44)}
            >
              <SideNavItem
                icon={SettingsOutlined}
                title="Edit Profile"
                status={active === 441}
                changeStatus={() => setActive(441)}
              />
              <SideNavItem
                icon={RepartitionOutlined}
                title="Remove "
                status={active === 442}
                changeStatus={() => setActive(442)}
              />
              <SideNavItem
                icon={SettingsOutlined}
                title="Theam"
                status={active === 443}
                changeStatus={() => setActive(443)}
              />
            </SideNavContainer>
          </SideNavContainer>
          <SideNavContainer title="Notice" icon={AbcOutlined}>
            <SideNavItem
              icon={FactoryOutlined}
              title="Manuals"
              isactive={true}
              status={active === 8}
              changeStatus={() => setActive(8)}
            />
            <SideNavItem
              icon={BrowserUpdatedOutlined}
              title="Update"
              status={active === 9}
              changeStatus={() => setActive(9)}
            />
            <SideNavItem
              icon={RestoreOutlined}
              title="Restore"
              status={active === 10}
              changeStatus={() => setActive(10)}
            />
          </SideNavContainer>
        </aside>
        <div className="w-full grid grid-cols-4 gap-4 p-4 border mx-4">
          {children}
        </div>
      </div>
    </div>
  );
}
const SideNavContainer = ({
  children,
  title,
  icon: IconComponent,
  status,
  changeStatus,
}) => {
  const [toggleSettings, setToggleSettings] = useState(false);

  return (
    <div className="">
      <SideNavItem
        icon={AbcOutlined}
        title={title}
        toggleHeight={() => setToggleSettings((prev) => !prev)}
        status={status}
        changeStatus={changeStatus}
      />
      <div
        className={`${toggleSettings ? "max-h-screen" : "max-h-0"} ml-4 xl:ml-6  border-l transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};

const SideNavItem = ({
  icon: IconComponent,
  title,
  url = "#",
  toggleHeight,
  status,
  changeStatus,
}) => {
  const handleClick = () => {
    toggleHeight && toggleHeight();
    changeStatus && changeStatus();
  };
  return (
    <Link href={url}>
      <div
        onClick={handleClick}
        className={`${status ? "bg-gray-100" : ""} flex items-center gap-2 group p-2 cursor-pointer hover:bg-gray-100`}
      >
        <span className={`${status ? "text-yellow-600 " : ""} `}>
          {<IconComponent />}
        </span>
        <p
          className={`text-sm group-hover:font-bold ${status ? "text-yellow-500" : ""}`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default SideNav;
