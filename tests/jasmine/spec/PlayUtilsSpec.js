describe("PlayUtils test", function() {

  it('should change the player by setting the playing attribute to true or false', () => {
    const p1 = { id: '1', name: 'Laurent', playing: false };
    const p2 = { id: '2', name: 'Rémi', playing: true };
    const { player1, player2 } = changePlayer(p1, p2)
    expect(player1).toEqual(jasmine.objectContaining({ name: 'Laurent', playing: true }));
    expect(player2).toEqual(jasmine.objectContaining({ name: 'Rémi', playing: false }));
  });

  it('should return the current player: the one that has the playing attribute set to true', () => {
    const p1 = { id: '1', name: 'Laurent', playing: false };
    const p2 = { id: '2', name: 'Rémi', playing: true };
    expect(getCurrentPlayer(p1, p2).name).toEqual('Rémi');
  });


  it('should determine whether a move is horizontal', function() {
    expect(isHorizontalMove({ x: 1, y: 2 }, { x: 3, y: 2 })).toBe(true);
    expect(isHorizontalMove({ x: 1, y: 2 }, { x: 3, y: 3 })).toBe(false);
  });
});