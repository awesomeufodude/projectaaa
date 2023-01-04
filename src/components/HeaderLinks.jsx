import React from "react";

function HeaderLinks({ Links, setActive, active, booksRef, authorsRef, gamesRef, NftRef }) {

  const refArr = [booksRef, booksRef , authorsRef, gamesRef, NftRef]
 
  return (
    <div className="w-full flex items-center justify-evenly my-auto h-[4.5rem]">
      {Links.map((link, i) => (
        <a
          href={`#${link}`}
          className="link"
          data-link-name={link}
          key={i}
          onClick={(e) => {
            setActive(
              e.currentTarget.getAttribute(
                ["data-link-name"]
              )
            )
            refArr[i]?.current?.scrollIntoView({behavior: "smooth"});
          }
          }
        >
          {link}
          
            <div
              className={`${active === link && "w-6 h-1 bg-project_orange rounded-lg absolute -bottom-2 transition-all ease-linear duration-300"}`}
          >
            
            </div>
          
        </a>
      ))}
    </div>
  );
}

export default HeaderLinks;
