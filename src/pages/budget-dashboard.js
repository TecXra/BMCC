import Layout from "@/components/layout";
import React,{useEffect, useState} from "react";
import styles from "../styles/budgetDashboard.module.css";
import { useRouter } from "next/router";
import CustomTabs from "@/components/budgetDetails/customTabs";
import CustomTable from "@/components/budgetDetails/customTable";
import SpendDownTable from "@/components/spendDown/spendDownTable";
import { Pagination } from "antd";
import dynamic from "next/dynamic";

const CustomChart = dynamic(
  () => import("@/components/budgetDashboard/customChart"),
  {
    ssr: false, // This will disable server-side rendering for the component
  }
);

const initailSpendDowntableRowsData = [
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 },
  { account:8001, dept:80045, opt_unit:9999, product:9999, fundind_code:20, class_field:100, program_code:99999, source:99999, amount:28000 }
]



export default function BudgetDashboard() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [spendDowntableRowsData, setSpendDowntableRowsData] = useState(initailSpendDowntableRowsData);
  const pageSize = 8;

  const budgetSummaryTableRowsData = [
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
      budget: 28000,
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
 
  useEffect(()=>{
    if(searchValue === ''){
      setSpendDowntableRowsData(initailSpendDowntableRowsData)
    }
  },[searchValue])

 
  const handleSearch = () => {
    if(searchValue){
      let tempArray = initailSpendDowntableRowsData.filter((item) =>
        item.account.toString().includes(searchValue)
      );
      setSpendDowntableRowsData(tempArray)
    }
    else {
      setSpendDowntableRowsData(initailSpendDowntableRowsData)

    }
  }
    
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return spendDowntableRowsData.slice(startIndex, startIndex + pageSize);
  };
  const tabContentBudgetSummary = () => {
    return (
      <div>
        <h1 className={[styles.table_heading_title, "mt-[29px]"].join(" ")}>
          Computer Center Operations
        </h1>
        <CustomTable rowData={budgetSummaryTableRowsData} />
        <h1
          className={[styles.table_heading_title, "mt-[25px] mb-[1px]"].join(
            " "
          )}
        >
          Academic Computing
        </h1>
        <CustomTable rowData={budgetSummaryTableRowsData} />
        <div className="mt-[28px]">
          <div className={styles.summary_section}>
            <h1 className={styles.summary_title}>Summary</h1>
            <div className="mt-[29px] ml-[20px]">
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

  const tabContentSpendDown = () => {
    return (
      <div>
        <CustomChart />

        <div className="mt-[5px] flex">
          <div className="mr-[20px]">
            <input
              value={searchValue}
              onChange={(e)=>{setSearchValue(e.target.value)}}
              type="text"
              placeholder="Search"
              className={styles.search_input}
            />
          </div>
          <div>
            <button
              onClick={()=>{handleSearch()}}
              className={
                "border-[2px] border-[#060B25]  bg-[#232F64] text-white text-[15px] leading-[19px] font-outfit-semibold flex justify-center items-center w-[160px] h-[44px] rounded-lg"
              }
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-[20px]">
        <SpendDownTable rowData={getPageData()} />
        </div>
        <div className="mt-[21px]">
        <Pagination 
            align="center"  
            showSizeChanger={false} 
            current={currentPage} 
            total={spendDowntableRowsData.length} 
            pageSize={pageSize} 
            onChange={handlePageChange} 
          />
        </div>
      </div>
    );
  };

  const tabItems = [
    {
      key: "1",
      label: "Spend Down",
      children: tabContentSpendDown(),
    },
    {
      key: "2",
      label: "Budget Summary",
      children: tabContentBudgetSummary(),
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
      </div>

      <div>
        <h1 className={styles.page_title}>IRT Budget 2024</h1>
      </div>

      <div className="mt-[18px] flex justify-between">
        <div>
          <div className="flex items-center">
            <div>
              <h2 className={styles.budget_dasboard_detail_lable}>% Used</h2>
              <h2 className={styles.budget_dasboard_detail_used_value}>
                92.37<span>%</span>
              </h2>
            </div>
            <span className={styles.vertical_line}></span>
            <div className=" mr-[54px]">
              <h2 className={styles.budget_dasboard_detail_lable}>
                Budget Allocated
              </h2>
              <h2 className={styles.budget_dasboard_detail_allocated_value}>
                $ 400,000
              </h2>
            </div>
            <div className="">
              <h2 className={styles.budget_dasboard_detail_lable}>
                Budget Used
              </h2>
              <h2 className={styles.budget_dasboard_detail_budget_used_value}>
                $ 95,000
              </h2>
            </div>
          </div>
          <div className="mt-[9px]">
            <h1 className={styles.page_subtitle}>Updated as of 12/22/2023</h1>
          </div>
        </div>
        <div className="flex">
          <picture>
            <img
              src="/user-profile-40.png"
              className="h-[40px] w-[40px] mr-[17px] mt-[5px]"
              alt="user profile"
            />
          </picture>
          <div>
            <h1 className={styles.page_about_section_heading}>
              Department Head
            </h1>
            <h1 className={styles.page_about_section_subHeading}>John Doe</h1>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <CustomTabs tabItems={tabItems} />
      </div>
    </Layout>
  );
}
