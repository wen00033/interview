import { table } from 'console';
import { defineStore } from 'pinia';
import axios from 'src/boot/axios';

export const useTableDataStore = defineStore('TableDataStore', {
  state: () => ({
    TableData: [],
  }),
  // getters: {

  // },
  actions: {
    async getApiData() {
      const res = await fetch('https://dahua.metcfire.com.tw/api/CRUDTest/a');
      const data = await res.json();
      this.TableData = data;
    },
    deleteItem(id: string) {
      this.TableData = this.TableData.filter((el) => el.id !== id);
    },
    updatedItem(id: string, name: string, age: string) {
      const item = this.TableData.find((el) => el.id == id);
      item.name = name;
      item.age = age;
    },

    addItem(item) {
      this.TableData.push(item);
    },
  },
});
