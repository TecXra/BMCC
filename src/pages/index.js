import CustomCard from "@/components/dashboard/customCard";
import FilledButton from "@/components/form/filledButton";
import HollowButton from "@/components/form/hollowButton";
import Layout from "@/components/layout";
import React, { useState, useEffect } from "react";
import styles from "../styles/dashboard.module.css";
import { useRouter } from "next/router";
import CustomProgress from "@/components/dashboard/customProgress";

export default function Dashboard() {
  const router = useRouter();

  const [irtDeptWidthStyle, setirtDeptWidthStyle] = useState({ width: 0 });
  const [dept2WidthStyle, setDept2WidthStyle] = useState({ width: 0 });
  const [dept3WidthStyle, setDept3WidthStyle] = useState({ width: 0 });
  const [dept4WidthStyle, setDept4WidthStyle] = useState({ width: 0 });
  const [irtDeptBudget, setIrtDeptBudget] = useState(394394);
  const [dept2Budget, setDept2Budget] = useState(294394);
  const [dept3Budget, setDept3Budget] = useState(494394);
  const [dept4Budget, setDept4Budget] = useState(94394);
  const [previousYearBudget, setPreviousYearBudget] = useState(1277576);
  const [progressValue, setProgressValue] = useState(0);

  const budget2023 = {
    irtDeptBudget: 194394,
    dept2Budget: 494394,
    dept3Budget: 294394,
    dept4Budget: 294394,
    previousYearBudget: 1277576,
  };

  const budget2022 = {
    irtDeptBudget: 420224,
    dept2Budget: 194394,
    dept3Budget: 394394,
    dept4Budget: 194394,
    previousYearBudget: 1203406,
  };

  const handleBudgetCardClick = (budget) => {
    // setIrtDeptBudget(budget.irtDeptBudget)
    // setDept2Budget(budget.dept2Budget)
    // setDept3Budget(budget.dept3Budget)
    // setDept4Budget(budget.dept4Budget)
    // setPreviousYearBudget(budget.previousYearBudget)
    router.push({
      pathname: "/yearly-budget",
      query: {
        irtDeptBudget: budget.irtDeptBudget,
        dept2Budget: budget.dept2Budget,
        dept3Budget: budget.dept3Budget,
        dept4Budget: budget.dept4Budget,
        previousYearBudget: budget.previousYearBudget,
      },
    });
  };

  useEffect(() => {
    const irtDeptBudgetPercentage = (irtDeptBudget / previousYearBudget) * 100;
    const irtDeptBudgetPercentageWidth =
      irtDeptBudgetPercentage.toFixed(2) + "%";
    setirtDeptWidthStyle({ width: irtDeptBudgetPercentageWidth });

    const dept2BudgetPercentage = (dept2Budget / previousYearBudget) * 100;
    const dept2BudgetPercentageWidth = dept2BudgetPercentage.toFixed(2) + "%";
    setDept2WidthStyle({ width: dept2BudgetPercentageWidth });

    const dept3BudgetPercentage = (dept3Budget / previousYearBudget) * 100;
    const dept3BudgetPercentageWidth = dept3BudgetPercentage.toFixed(2) + "%";
    setDept3WidthStyle({ width: dept3BudgetPercentageWidth });

    const dept4BudgetPercentage = (dept4Budget / previousYearBudget) * 100;
    const dept4BudgetPercentageWidth = dept4BudgetPercentage.toFixed(2) + "%";
    setDept4WidthStyle({ width: dept4BudgetPercentageWidth });
  }, [
    irtDeptBudget,
    dept2Budget,
    dept3Budget,
    dept4Budget,
    previousYearBudget,
  ]);

  useEffect(() => {
    const number = (Math.random() * 100).toFixed(2);
    setProgressValue(Number(number));
  }, []);

  function formatNumberToCurrency(num) {
    const numStr = num.toString();
    let lastThreeDigits = numStr.slice(-3);
    const otherDigits = numStr.slice(0, -3);

    if (otherDigits !== "") {
      lastThreeDigits = "," + lastThreeDigits;
    }

    const formattedNumber =
      otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeDigits;

    return `$${formattedNumber}`;
  }

  return (
    <Layout>
      <div className="flex justify-between">
        <div>
          <h1 className={styles.page_title}>Yearly Budget 2024</h1>
          <h1 className={styles.page_subtitle}>$10,000,000</h1>
        </div>
        <div className="flex mt-[40px]">
          <div className="mr-[10px]">
            <HollowButton
              text={"Spend Down"}
              onClick={() => {
                router.push("/spend-down");
              }}
            />
          </div>
          <div>
            <FilledButton
              text={"View Budget"}
              onClick={() => {
                router.push("/budget-details");
              }}
            />
          </div>
        </div>
      </div>

      {/* budget Used Section */}
      <div className={styles.budget_used_container}>
        <div>
          <h1 className={styles.budget_used_title}>Budget Used</h1>
          <h3 className={styles.budget_used_price}>$ 95,000</h3>
          <p className={styles.budget_used_date}>Updated as of 12/22/2023</p>
        </div>
        <div className="flex">
          <div className="mt-[-43px]">
            <CustomProgress value={progressValue} />
          </div>
          <div className="flex">
            <div
              onClick={() => {
                handleBudgetCardClick(budget2023);
              }}
              className={[
                styles.budget_used_card,
                "ml-[20px] cursor-pointer mr-[9px]",
              ].join(" ")}
            >
              <div>
                <h1 className={styles.budget_used_card_title}>Budget 2023</h1>
                <h3 className={styles.budget_used_card_price}>$1,277,576</h3>
                <p className={styles.budget_used_card_total}>
                  Used: <span>$1,277,576</span>
                </p>
              </div>
              <div>
                <picture>
                  <img
                    src="/card-right-arrow.png"
                    className="h-[20px] w-[20px] cursor-pointer"
                    alt="progress"
                  />
                </picture>
              </div>
            </div>
            <div
              onClick={() => {
                handleBudgetCardClick(budget2022);
              }}
              className={[styles.budget_used_card, "cursor-pointer"].join(" ")}
            >
              <div>
                <h1 className={styles.budget_used_card_title}>Budget 2022</h1>
                <h3 className={styles.budget_used_card_price}>$1,203,406</h3>
                <p className={styles.budget_used_card_total}>
                  Used: <span>$1,203,406</span>
                </p>
              </div>
              <div>
                <picture>
                  <img
                    src="/card-right-arrow.png"
                    className="h-[20px] w-[20px] cursor-pointer"
                    alt="progress"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}

      <div className="flex mt-[38px]">
        <div className="flex" style={irtDeptWidthStyle}>
          <div className={styles.progress_vertical_line}></div>
          <div className="mx-[3px] w-[100%]">
            <h1 className={styles.progress_title}>IRT</h1>
            <h3 className={styles.progress_price}>
              ${irtDeptBudget.toLocaleString()}
            </h3>
            <div className={styles.progress_bar_1}></div>
          </div>
        </div>
        <div className="flex" style={dept2WidthStyle}>
          <div className={styles.progress_vertical_line}></div>
          <div className="mx-[3px] w-[100%]">
            <h1 className={styles.progress_title}>Dept. 2</h1>
            <h3 className={styles.progress_price}>
              ${dept2Budget.toLocaleString()}
            </h3>
            <div className={styles.progress_bar_2}></div>
          </div>
        </div>
        <div className="flex" style={dept3WidthStyle}>
          <div className={styles.progress_vertical_line}></div>
          <div className="mx-[3px] w-[100%]">
            <h1 className={styles.progress_title}>Dept. 3</h1>
            <h3 className={styles.progress_price}>
              ${dept3Budget.toLocaleString()}
            </h3>
            <div className={styles.progress_bar_3}></div>
          </div>
        </div>
        <div className="flex" style={dept4WidthStyle}>
          <div className={styles.progress_vertical_line}></div>
          <div className="ml-[3px] w-[100%]">
            <h1 className={styles.progress_title}>Dept. 4</h1>
            <h3 className={styles.progress_price}>
              ${dept4Budget.toLocaleString()}
            </h3>
            <div className={styles.progress_bar_4}></div>
          </div>
        </div>
      </div>

      {/* budget by department section */}

      <div>
        <h1 className={styles.department_budget_title}>Budget by Department</h1>
        <div className="flex justify-between">
          <CustomCard
            title="IRT Budget"
            price="$394,394"
            used="$124,304"
            link="/budget-dashboard"
          />
          <CustomCard
            title="Dept. 2 Budget"
            price="$394,394"
            used="$124,304"
            link="/budget-dashboard"
          />
          <CustomCard
            title="Dept. 3 Budget"
            price="$394,394"
            used="$124,304"
            link="/budget-dashboard"
          />
          <CustomCard
            title="Dept. 4 Budget"
            price="$394,394"
            used="$124,304"
            link="/budget-dashboard"
          />
        </div>
      </div>
    </Layout>
  );
}
