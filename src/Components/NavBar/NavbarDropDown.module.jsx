import styles from "./NavbarDropDown.module.css";
import React from "react";

const NavbarFloat = ({
    textArr,
    onClick
}) => {
    return (
        <div onClick={onClick} className={styles.root}>
            {
                textArr.map( (text, ind) => (
                    <div key={text + "," + ind} className={styles.column} >
                        {
                            text.map( ( el, ind ) => (
                                <div key={text + "," + el + "," + ind } className={ ind === 0 ? styles.head : styles.body }>
                                    {el}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default NavbarFloat;