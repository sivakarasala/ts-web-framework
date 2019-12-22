export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
            <div>
                <h1>Aum Namah Shivaya Form</h1>
                <input />
            </div>
        `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
