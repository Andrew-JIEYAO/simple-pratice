export class Patient {
  id!: string;
  personalId: string;
  name: string;
  sex: string;
  birthday: string;
  phone: string;
  address: string;

  constructor(
    personalId: string,
    name: string,
    sex: string,
    birthday: string,
    phone: string,
    address: string
  ) {
    this.personalId = personalId || "",
      this.name = name || "",
      this.sex = sex || "",
      this.birthday = birthday || "",
      this.phone = phone || "",
      this.address = address || ""
  }
}
