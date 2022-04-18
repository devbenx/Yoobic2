import { Component, Prop, h, Watch, State, Host } from '@stencil/core';

interface Data {
      name: string,
}


@Component({
      tag: 'my-component',
      styleUrl: 'my-component.css',
      shadow: true,
})
export class MyComponent {

      @Prop() tittle: string;

      @Prop() data: string;
      @State() items: Data[];

      componentWillLoad() {
            console.log(JSON.parse(this.data))
            this.parseData(this.data);
      }

      @Watch('data')
      parseData(newValue: string) {
            if (newValue) {
                  this.items = JSON.parse(newValue);
                  console.log(this.items)
            }
      }

      render() {
            return <div>
                  <h2>{this.tittle}</h2>
                  {this.items && this.items.map((item) => {
                        return <p>{item.name}</p>
                  })}
            </div>;
      }
}
