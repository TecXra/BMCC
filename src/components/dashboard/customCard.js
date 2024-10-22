import React from "react";
import Image from 'next/image';
import styles from '../../styles/dashboard.module.css'
import { useRouter } from "next/router";


function CustomCard({title,price,used,link}) {
  const router = useRouter();

  return (
    <div onClick={()=>{router.push(link)}} className="cursor-pointer">
      <div className={styles.main_card}>
        <h3 className={styles.card_text}>{title}</h3>
        <div className="mt-[1px]">
        <h3 className={styles.card_text}>{price}</h3>
        </div>
        <div className="mt-[15px]">
          <h3 className={styles.card_text_used}>Used: {used}</h3>
        </div>
        <div className="flex justify-end">
        <div className={styles.card_bottom_arrow_container}>
          <div>
            <Image className={styles.card_bottom_arrow}
              src="/arrow-right.png" 
              height={20}
              width={28}
              alt="arrow key"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
