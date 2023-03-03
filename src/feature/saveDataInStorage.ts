import { StorageType } from "@/enums/storageTypes";

const storageFeatures = {
    getData: (type: StorageType) => {
        switch (type) {
            case StorageType.Shopping: {
                return window.localStorage.getItem("shopping");
            }
        }
    },
    saveData: (type: StorageType, value: any) => {
        switch (type) {
            case StorageType.Shopping: {
                window.localStorage.setItem("shopping", value);
                break;
            }
        }
    },
};

export default storageFeatures;
