import React from "react";
import styles from "./detail.module.css";
const Order = () => {
  const servers = [
    {
      model: "Cloud VPS 1",
      CPU: "4 vCPU Cores",
      RAM: "6 GB RAM",
      Storage: "100 GB NVMe",
      DataTransfer: "32 TB Traffic",
      Price: "$7.75 / month",
    },
    {
      model: "Cloud VPS 2",
      CPU: "2 vCPU Cores",
      RAM: "8 GB RAM",
      Storage: "105 GB NVMe",
      DataTransfer: "30 TB Traffic",
      Price: "$9.75 / month",
    },
    {
      model: "Cloud VPS 3",
      CPU: "5 vCPU Cores",
      RAM: "10 GB RAM",
      Storage: "200 GB NVMe",
      DataTransfer: "128 TB Traffic",
      Price: "$100.75 / month",
    },
    {
      model: "Cloud VPS 4",
      CPU: "6 vCPU Cores",
      RAM: "10 GB RAM",
      Storage: "130 GB NVMe",
      DataTransfer: "65 TB Traffic",
      Price: "$9.75 / month",
    },
    {
      model: "Cloud VPS 5",
      CPU: "2 vCPU Cores",
      RAM: "3 GB RAM",
      Storage: "190 GB NVMe",
      DataTransfer: "75 TB Traffic",
      Price: "$15.75 / month",
    },
    {
      model: "Cloud VPS 6",
      CPU: "70 vCPU Cores",
      RAM: "8 GB RAM",
      Storage: "300 GB NVMe",
      DataTransfer: "80 TB Traffic",
      Price: "$25.75 / month",
    },
  ];
  return (
    <div className={styles.server__table__container}>
      <h1>Мои сервера</h1>
      <div className={styles.server_card}>
        <table className={styles.server__info_table}>
          <thead>
            <tr className={styles.info}>
              <th>Модель</th>
              <th>CPU</th>
              <th>RAM</th>
              <th>Storage</th>
              <th>Data Transfer</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {servers.map((server, index) => (
              <tr key={index}>
                <td>{server.model}</td>
                <td>{server.CPU}</td>
                <td>{server.RAM}</td>
                <td>{server.Storage}</td>
                <td>{server.DataTransfer}</td>
                <td>{server.Price}</td>

                <td>
                  <button className={styles.btn}>Заказать</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
