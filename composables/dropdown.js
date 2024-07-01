export class Dropdown {
    constructor(selected = "Select an option", items = []) {
      this.isOpen = false;
      this.selected = selected;
      this.items = items;
      this.id = `dropdown-${Math.random().toString(36)}`;
    }
  
    toggle() {
      // event.stopPropagation();
      console.log(this);
      this.isOpen = !this.isOpen;
    }
  
    select(item) {
      this.selected = item;
      // this.isOpen = false;
    }
    select2(item){
      this.selected = item;
      this.isOpen = false;

    }
    handleClickOutside(event) {
      const dropdownElement = document.getElementById(this.id);
      if (this.isOpen && dropdownElement && !dropdownElement.contains(event.target)
      ) {
        this.isOpen = false;
      }
    }
  }