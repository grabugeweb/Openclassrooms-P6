describe("ChangeArms test", function () {
  it('should check if there is a weapon on the case', () => {
    const findArmeByIdSpy = spyOn(window, 'findArmeById').and.returnValue({id: 'weapon1'});
    const changeArmesSpy = spyOn(window, 'changeArmes');
    ifWeaponIsOnCase({id: 'player1'}, [{id: 'weapon1'}]);
    expect(findArmeByIdSpy).toHaveBeenCalledWith([{id: 'weapon1'}], 'player1');
    expect(changeArmesSpy).toHaveBeenCalledWith({id: 'player1'}, {id: 'weapon1'});
  });

  it('should return a weapon object when calling findArmeById', () => {
    const armes = [{id: 'weapon1'}, {id: 'weapon2'}];
    expect(findArmeById(armes, 'weapon1')).toEqual({id: 'weapon1'});
  });

  it('should return a weapon object when calling findArmeByName', function ()  {
    armes=[{name:'laser'},{name:'pioche'}];
    expect(findArmeByName('laser')).toEqual({name:'laser'});
  });

  it('should return update array armes when calling updateArmesInArmsArray',() => {

  });

});
