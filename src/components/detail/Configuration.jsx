import React, { useState } from "react";
import style from "./detail.module.css";

const Configuration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProcessor, setSelectedProcessor] = useState(null);
  const [selectedCores, setSelectedCores] = useState(2);
  const [selectedFrequency, setSelectedFrequency] = useState(1.5);
  const [selectedRAM, setSelectedRAM] = useState(4);
  const [selectedDisk, setSelectedDisk] = useState(null);
  const [diskSize, setDiskSize] = useState(null);
  const [selectedGPU, setSelectedGPU] = useState(false);
  const [selectedPowerSupply, setSelectedPowerSupply] = useState(false);
  const [selectedKVM, setSelectedKVM] = useState(false);
  const [selectedPrivateNetwork, setSelectedPrivateNetwork] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProcessorSelect = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedProcessor(value);
    } else {
      setSelectedProcessor(null);
    }
  };

  const handleCoresChange = (event) => {
    setSelectedCores(parseInt(event.target.value));
  };

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(parseFloat(event.target.value));
  };

  const handleRAMChange = (event) => {
    setSelectedRAM(parseInt(event.target.value));
  };

  const handleDiskSelect = (disk) => {
    setSelectedDisk(disk);
    setDiskSize(null); // Сбросить выбранное значение размера диска при изменении типа диска
  };

  const handleDiskSizeChange = (event) => {
    setDiskSize(parseInt(event.target.value));
  };

  const handleGPUSelect = () => {
    setSelectedGPU(!selectedGPU);
  };

  const handlePowerSupplySelect = () => {
    setSelectedPowerSupply(!selectedPowerSupply);
  };

  const handleKVMSelect = () => {
    setSelectedKVM(!selectedKVM);
  };

  const handlePrivateNetworkSelect = () => {
    setSelectedPrivateNetwork(!selectedPrivateNetwork);
  };

  const getProcessorOptions = () => {
    return [
      { name: "Intel", value: "intel" },
      { name: "AMD", value: "amd" },
      { name: "Ampere", value: "ampere" },
      { name: "Apple", value: "apple" },
      { name: "Broadcom", value: "broadcom" },
    ];
  };

  const diskOptions = [
    { name: "SSD SATA, ГБ", value: "ssd_sata", minSize: 120, maxSize: 3840 },
    { name: "HDD SATA", value: "hdd_sata", minSize: 500, maxSize: 10000 },
    { name: "SSD NVMe", value: "ssd_nvme", minSize: 500, maxSize: 15360 },
    { name: "MicroSD", value: "micro_sd" },
  ];

  const renderDiskOptions = () => {
    return diskOptions.map((disk) => (
      <div key={disk.value}>
        <label style={{ display: "flex" }}>
          <input
            type="checkbox"
            name="disk"
            value={disk.value}
            checked={selectedDisk === disk.value}
            onChange={() => handleDiskSelect(disk.value)}
          />
          {disk.name}
        </label>
        {selectedDisk === disk.value && renderDiskSlider(disk)}
      </div>
    ));
  };

  const renderDiskSlider = (disk) => {
    if (
      selectedDisk === "ssd_sata" ||
      selectedDisk === "hdd_sata" ||
      selectedDisk === "ssd_nvme"
    ) {
      const minSize = disk.minSize;
      const maxSize = disk.maxSize;
      return (
        <div className={style.slider_container}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>1x{minSize}</span>
            <span>2x{maxSize}</span>
          </div>
          <input
            type="range"
            min={minSize}
            max={maxSize}
            value={diskSize || ""}
            onChange={handleDiskSizeChange}
            className={style.slider}
          />
          <span>{diskSize}</span>
        </div>
      );
    } else {
      return null; // Ничего не отображать для MicroSD
    }
  };

  return (
    <div className={style.configuration_container} style={{ display: "flex" }}>
      <div className={style.configuration_container_first}>
        <div className={style.config_proccessor}>
          <h3>Процессоры</h3>
          <div className={style.dropdown}>
            <button className={style.dropbtn} onClick={toggleDropdown}>
              {selectedProcessor || "Все процессоры"} ▼
            </button>
            {isOpen && (
              <div className={style.dropdown_content}>
                {getProcessorOptions().map((processor) => (
                  <label key={processor.value}>
                    <input
                      type="checkbox"
                      name="processor"
                      value={processor.value}
                      onChange={handleProcessorSelect}
                      checked={selectedProcessor === processor.value}
                    />
                    {processor.name}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={style.cores_container}>
          <h3>Ядра, шт</h3>
          <input
            type="range"
            min="2"
            max="198"
            value={selectedCores}
            onChange={handleCoresChange}
            className={style.slider}
          />
          <span>{selectedCores}</span>
        </div>
        <div className={style.frequency_container}>
          <h3>Частота процессора, ГГц</h3>
          <input
            type="range"
            min="1.5"
            max="4.5"
            step="0.1"
            value={selectedFrequency}
            onChange={handleFrequencyChange}
            className={style.slider}
          />
          <span>{selectedFrequency.toFixed(1)}</span>
        </div>
        <div className={style.ram_container}>
          <h3>Объем RAM, ГБ</h3>
          <input
            type="range"
            min="4"
            max="1536"
            value={selectedRAM}
            onChange={handleRAMChange}
            className={style.slider}
          />
          <span>{selectedRAM}</span>
        </div>
      </div>
      <div className={style.configuration_container_second}>
        <div className={style.discs_container}>
          <h3>Диски</h3>
          {renderDiskOptions()}
        </div>
        <div className={style.features_container}>
          <h3>Особенности конфигурации</h3>
          <label>
            <input
              type="checkbox"
              checked={selectedGPU}
              onChange={handleGPUSelect}
            />
            GPU
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedPowerSupply}
              onChange={handlePowerSupplySelect}
            />
            2 блока питания
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedKVM}
              onChange={handleKVMSelect}
            />
            KVM-консоль
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedPrivateNetwork}
              onChange={handlePrivateNetworkSelect}
            />
            Приватная сеть
          </label>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
