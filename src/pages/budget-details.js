import Layout from "@/components/layout";
import React from "react";
import styles from "../styles/budgetDetail.module.css";
import { useRouter } from "next/router";
import FilledButton from "@/components/form/filledButton";
import CustomTabs from "@/components/budgetDetails/customTabs";
import CustomTable from "@/components/budgetDetails/customTable";

export default function BudgetDetails() {
  const router = useRouter();

  const tableRowsData = [
    {
      projectName: "Cybersecurity Enhancements",
      type: "Continuing",
      description: "This project is to enhance measures is to enhance measures",
      budget: 28000,
    },
    {
      projectName: "End-of-Life Camera Replacement Strategy (2nd phase)",
      type: "Continuing",
      description: "The End-of-Life Camera Replacement is to enhance measures",
      budget: 25000,
    },
    {
      projectName: "Virtual ID Card",
      type: "Continuing",
      description:
        "The Virtual ID Card System is a digital Card System is a digital",
      budget: 28000,
    },
    {
      projectName: "EndPoint Management Solution",
      type: "New",
      description: "Continuation of Student Endpoints is to enhance measures",
      budget: 28000,
    },
  ];

  const tabContent = () => {
    return (
      <div>
        <h1 className={[styles.table_heading_title, "mt-[29px]"].join(" ")}>
          Computer Center Operations
        </h1>
        <CustomTable rowData={tableRowsData} />
        <h1
          className={[styles.table_heading_title, "mt-[25px] mb-[1px]"].join(
            " "
          )}
        >
          Academic Computing
        </h1>
        <CustomTable rowData={tableRowsData} />
        <div className="mt-[28px]">
          <div className={styles.summary_section}>
            <h1 className={styles.summary_title}>Summary</h1>
            <div className="mt-[27px] ml-[20px]">
              <h3 className={styles.summary_details_user_heading}>
                <picture>
                  <img
                    src="/user-profile.png"
                    className="h-[24px] w-[24px]"
                    alt="user profile"
                  />
                </picture>
                <span>Department Heard: John Doe</span>
              </h3>
              <div className="flex mt-[18px]">
                <h3 className={styles.summary_details}>
                  Computer Center Operations
                </h3>
                <div style={{width:'820px',marginRight:'24px'}}>
                  <span className={styles.border_bottom_dashed}></span>
                </div>
                <h3 className={styles.summary_details_price}>$ 102,457</h3>
              </div>
              <div className="flex mt-[7px]">
                <h3 className={styles.summary_details}>Academic Computing</h3>
                <div style={{width:'878px',marginRight:'21px'}}>
                <span className={styles.border_bottom_dashed_2}></span>
                </div>
                <h3 className={styles.summary_details_price}>$ 102,457</h3>
              </div>
              <div className="flex justify-between">
                <h3 className={[styles.summary_details, "mt-[34px]"].join(" ")}>
                  Last Year’s IRT Budget<span>$835,568</span>
                </h3>
                <div className={styles.summary_detail_total_section}>
                  <h4 className="pl-[2px]">TOTAL IRT BUDGET</h4>
                  <h3>$207,457</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const tabItems = [
    {
      key: "1",
      label: "IRT",
      children: tabContent(),
    },
    {
      key: "2",
      label: "Dept. 2",
      children: tabContent(),
    },
    {
      key: "3",
      label: "Dept. 2",
      children: tabContent(),
    },
    {
      key: "4",
      label: "Dept. 4",
      children: tabContent(),
    },
  ];

  return (
    <Layout>
      <div className="flex justify-between mt-[40px]">
        <button
          onClick={() => {
            router.push("/");
          }}
          className="top-back-link"
        >
          <picture className="flex">
            <img
              src="/back-arrow.png"
              className="h-[18px] w-[18px]"
              alt="back arrow"
            />
            <span className="ml-[6px]">Back</span>
          </picture>
        </button>
        <div>
          <h4 className={styles.status_section}>Status: Approved</h4>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className={styles.page_title}>Budget Details 2024</h1>
          <h1 className={styles.page_subtitle}>Allocated: $ 1,000,000</h1>
        </div>
        <div className="mt-[21px]">
          <FilledButton 
            text={"Download Budget"}
            />
        </div>
      </div>

      <div className="mt-[31px]">
        <CustomTabs tabItems={tabItems} />
      </div>
    </Layout>
  );
}
