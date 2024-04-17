import React from "react";
import styles from "./detail.module.css";

const ServerTable = () => {
  const servers = [
    {
      name: "Сервер 1",
      ip: "192.168.1.1",
      port: "8080",
      status: "Онлайн",
      players: 10,
      maxPlayers: 20,
    },
    {
      name: "Сервер 2",
      ip: "192.168.1.2",
      port: "8081",
      status: "Оффлайн",
      players: 0,
      maxPlayers: 10,
    },
    {
      name: "Сервер 2",
      ip: "192.168.1.2",
      port: "8081",
      status: "Оффлайн",
      players: 0,
      maxPlayers: 10,
    },
    {
      name: "Сервер 2",
      ip: "192.168.1.2",
      port: "8081",
      status: "Оффлайн",
      players: 0,
      maxPlayers: 10,
    },
    {
      name: "Сервер 2",
      ip: "192.168.1.2",
      port: "8081",
      status: "Оффлайн",
      players: 0,
      maxPlayers: 10,
      jkdskjhsf: "ncsnnlka",
    },
    {
      name: "Сервер 2",
      ip: "192.168.1.2",
      port: "8081",
      status: "Оффлайн",
      players: 0,
      maxPlayers: 10,
    },
  ];

  return (
    <div className={styles.server__table__container}>
      <h1>Мои сервера</h1>
      <div className={styles.server_card}>
        <table className={styles.server__info_table}>
          <tbody>
            {servers.map((server, index) => (
              <tr key={index}>
                <td>{server.name}</td>
                <td>IP-адрес: {server.ip}</td>
                <td>Порт: {server.port}</td>
                <td>Статус: {server.status}</td>
                <td>Статус: {server.jkdskjhsf}</td>
                <td>Статус: {server.jkdskjhsf}</td>
                <td>Статус: {server.jkdskjhsf}</td>
                <td>Статус: {server.jkdskjhsf}</td>
                <td>Статус: {server.jkdskjhsf}</td>
                <td>Статус: {server.jkdskjhsf}</td>
                <td>Статус: {server.jkdskjhsf}</td>
                <td>Статус: {server.jkdskjhsf}</td>
                <td>
                  Количество игроков: {server.players}/{server.maxPlayers}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServerTable;
