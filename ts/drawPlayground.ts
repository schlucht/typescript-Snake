export class DrawPlayGround {
  canvasPosition: DOMRect;
  private _rows: number = 0;
  private _cols: number = 0;
  private _map = new Map<number, number>();

  constructor(public canvas: HTMLDivElement, private size: number = 10) {
    if (this.canvas) {
      this.canvasPosition = canvas.getBoundingClientRect();
      this._rows = Math.floor(this.canvasPosition.height / size);
      this._cols = Math.floor(this.canvasPosition.width / size);
    }
  }

  public draw() {
    for (let i = 0; i < this._rows; i++) {
      for (let j = 0; j < this._cols; j++) {
        let div = document.createElement('div') as HTMLDivElement;
        div.style.position = 'absolute';
        div.style.border = 'solid 1px #ccc';
        div.style.height = `${this.size}px`;
        div.style.width = `${this.size}px`;
        div.style.top = `${i * this.size + this.canvasPosition.top}px`;
        div.style.left = `${j * this.size + this.canvasPosition.left}px`;
        this.canvas.appendChild(div);
        this._map.set(j, i);
      }
    }
    console.log(this._map.get(0));
  }
}
