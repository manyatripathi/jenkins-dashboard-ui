import css from "styled-jsx/css";

export default css.global`
  .mdl-layout__drawer {
    border: 0;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0),
      0 0px 0px 0 rgba(0, 0, 0, 0);
  }

  .active {
    color: #3f51b5;
    font-weight: 600;
  }
  .nav-link {
    text-decoration: none;
    padding: 10px;
    display: block;
  }

  .mdl-layout__header {
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0),
      0 0px 0px 0 rgba(0, 0, 0, 0);
  }

  .mdl-layout__drawer {
    background: #ffffff;
  }

  .mdl-layout__content {
    background: #f2f2f2;
  }

  .dashboard-card {
    padding: 15px;
  }

  .side-menu-icon {
    margin-right: 16px;
  }
  .dashboard-top-card-title {
    color: #546e7a;
    font-size: 12px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 18px;
    letter-spacing: -0.04px;
  }

  .dashboard-top-card-data {
    margin-top: 12px;
  }

  .mdl-chip__contact {
    height: 56px;
    width: 56px;
    border-radius: 56px;
  }

  .icon {
    font-size: 36px;
    margin: 10px;
  }

  .test {
    width: 250px;
  }

  .content-heading {
    color: #263238;
    font-size: 18px;
    font-family: "Arial", sans-serif;
    font-weight: 10;
    line-height: 20px;
    letter-spacing: -0.05px;
  }

  .content-heading-hr {
    margin-left: -15px;
    margin-right: -15px;
    border-top-width: 0.5px;
  }

  .chartContainer {
    position: relative;
    height: 300px;
  }

  .job-status-green {
    font-size: 29px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.24px;
    color: #06b81b;
    margin-top: -15px;
    margin-left: 5px;
  }

  .job-status-red {
    font-size: 29px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.24px;
    color: #f70707;
    margin-top: -15px;
    margin-left: 5px;
  }

  .job-status-yellow {
    font-size: 29px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.24px;
    color: #faee07;
  }

  @media screen and (min-width: 1024px) {
    .header-title {
      color: #3f51b5;
    }
    .drawer-title {
      color: white;
    }
    .mdl-layout__title {
      background: #3f51b5;
    }
  }

  .table-responsive {
    min-height: 0.01%;
    overflow-x: auto;
  }
  @media screen and (max-width: 767px) {
    .table-responsive {
      width: 100%;
      margin-bottom: 15px;
      overflow-y: hidden;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      border: 1px solid #ddd;
    }
    .table-responsive > .table {
      margin-bottom: 0;
    }
    .table-responsive > .table > thead > tr > th,
    .table-responsive > .table > tbody > tr > th,
    .table-responsive > .table > tfoot > tr > th,
    .table-responsive > .table > thead > tr > td,
    .table-responsive > .table > tbody > tr > td,
    .table-responsive > .table > tfoot > tr > td {
      white-space: nowrap;
    }
    .table-responsive > .table-bordered {
      border: 0;
    }
    .table-responsive > .table-bordered > thead > tr > th:first-child,
    .table-responsive > .table-bordered > tbody > tr > th:first-child,
    .table-responsive > .table-bordered > tfoot > tr > th:first-child,
    .table-responsive > .table-bordered > thead > tr > td:first-child,
    .table-responsive > .table-bordered > tbody > tr > td:first-child,
    .table-responsive > .table-bordered > tfoot > tr > td:first-child {
      border-left: 0;
    }
    .table-responsive > .table-bordered > thead > tr > th:last-child,
    .table-responsive > .table-bordered > tbody > tr > th:last-child,
    .table-responsive > .table-bordered > tfoot > tr > th:last-child,
    .table-responsive > .table-bordered > thead > tr > td:last-child,
    .table-responsive > .table-bordered > tbody > tr > td:last-child,
    .table-responsive > .table-bordered > tfoot > tr > td:last-child {
      border-right: 0;
    }
    .table-responsive > .table-bordered > tbody > tr:last-child > th,
    .table-responsive > .table-bordered > tfoot > tr:last-child > th,
    .table-responsive > .table-bordered > tbody > tr:last-child > td,
    .table-responsive > .table-bordered > tfoot > tr:last-child > td {
      border-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .mdl-data-table {
      table-layout: fixed;
      width: 100%;
    }
  }

  #page-numbers {
    display: inline;
  }

  #page-numbers > button {
    margin-right: 0.3em;
  }

  .pagination {
    padding: 20px;
    justify-content: flex-end;
    display: flex;
    line-height: 50px;
  }

  .mdl-data-table__cell--non-numeric-status.mdl-data-table__cell--non-numeric-status {
    text-align: center;
  }

  .status {
    height: 20px;
    width: 20px;
    border-radius: 20px;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-align: center;
    margin-right: 8px;
    font-size: 18px;
    line-height: 32px;
  }

  .pipeline-name {
    text-decoration: none;
    color: #3f51b5;
  }

  .mdl-chip {
    width: 70px;
  }

  table {
    table-layout: fixed;
    white-space: normal !important;
  }

  td {
    word-wrap: break-word;
  }
`;
