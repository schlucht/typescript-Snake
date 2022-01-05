export class CreateCanvas {
  private _canvas: HTMLDivElement;
  public get Canvas() {
    return this._canvas;
  }
  constructor(
    private id: string,
    public canvas_height: number = 300,
    public canvas_width = 500
  ) {
    this._canvas = document.getElementById(id) as HTMLDivElement;
    if (!this._canvas) {
      this._canvas = document.createElement('div');
      this._canvas.setAttribute('id', this.id ? this.id : 'canvas');
      document.body.appendChild(this._canvas);
    }

    this._canvas.style.height = `${this.canvas_height}px`;
    this._canvas.style.width = `${this.canvas_width}px`;
    this._canvas.style.border = '1px solid black';
    this._canvas.style.backgroundColor = '#fff';
  }
}
