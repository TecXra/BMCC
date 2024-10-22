import Layout from "@/components/layout";
import React, { useState, useEffect } from 'react';
import styles from "../styles/spendDown.module.css";
import { useRouter } from "next/router";
import CustomTabs from "@/components/budgetDetails/customTabs";
import SpendDownTable from "@/components/spendDown/spendDownTable";
import { Pagination } from 'antd';


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


export default function SpendDown() {
  const router = useRouter();
  const [spendDowntableRowsData, setSpendDowntableRowsData] = useState(initailSpendDowntableRowsData);
  const [searchValue, setSearchValue] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

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

  const tabContent = () => {
    return (
      <div className="mt-[26px]">
        <SpendDownTable rowData={getPageData()} />
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
        key: '1',
        label: 'All',
        children: tabContent(),
      },
    {
      key: '2',
      label: 'IRT',
      children: tabContent(),
    },
    {
      key: '3',
      label: 'Dept. 2',
      children: tabContent(),
    },
    {
      key: '4',
      label: 'Dept. 2',
      children: tabContent(),
    },
    {
        key: '5',
        label: 'Dept. 4',
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
          <h4 className={styles.status_section}>Updated as of 12/22/2023</h4>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className={styles.page_title}>Spend Down Details 2024</h1>
          <h1 className={styles.page_subtitle}>Used: $ 400,000</h1>
        </div>
        <div className="mt-[21px]">
          <button 
                className={'border-[2px] border-[#060B25]  bg-[#232F64] text-white text-[15px] leading-[19px] font-outfit-semibold flex justify-center items-center w-[180px] h-[40px] rounded-full'}>
                Upload Spend Down
            </button>
        </div>
      </div>
        <div className="mt-[32px] flex">
            <div className="mr-[20px]">
                <input   value={searchValue}
              onChange={(e)=>{setSearchValue(e.target.value)}} type="text" placeholder="Search" className={styles.search_input}/>
            </div>
            <div>
            <button 
             onClick={()=>{handleSearch()}}
                className={'border-[2px] border-[#060B25]  bg-[#232F64] text-white text-[15px] leading-[19px] font-outfit-semibold flex justify-center items-center w-[160px] h-[44px] rounded-lg'}>
                Search
            </button>
            </div>
        </div>
      <div className="mt-[15px]">
        <CustomTabs tabItems={tabItems} />
      </div>
    </Layout>
  );
}
