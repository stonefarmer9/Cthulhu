describe("Square", () => {
  it('can match two sqaures area', () => {
    a = new Square(5)
    b = new Square(5)
    area1 = a.area()
    area2 = b.area()
    expect(area1).toEqual(area2)
  }),

  it ("knows two squares area do not match", () => {
    a = new Square(5)
    b = new Square(10)
    area1 = a.area()
    area2 = b.area()
    expect(area1).toNotEqual(area2)

  }),

  it("raises an error message when given a letter on creation", () => {
    const a = function() {badSquare = new Square('B'); }
    expect(a).toRaiseError();
  })
})

describe('Area', () => {
  it ('calculates a squares area', () => {
    a = new Square(5)
    actual = a.area()
    expect(actual).toEqual(25)
  })
})
