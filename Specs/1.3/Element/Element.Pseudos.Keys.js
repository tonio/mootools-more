
describe('Element.Pseudos.Keys', function(){

	it('keys: should fire events for keyboard key cobinations', function(){

		var callback = jasmine.createSpy(), called = false,
			callback2 = jasmine.createSpy(), called2 = false;

		document.body.addEvent('keydown:keys(shift+a)', callback);
		document.body.addEvent('keydown:keys(shift++)', callback2);

		// shift+a
		simulateEvent('type', ['[shift]a[shift-up]', document.body], function(){
			expect(callback).toHaveBeenCalled();
			document.body.eliminate('$moo:keys-pressed');
		});

		// shift++
		simulateEvent('type', ['[shift]+[shift-up]', document.body], function(){
			expect(callback2).toHaveBeenCalled();
			document.body.eliminate('$moo:keys-pressed');
		});
	});

});
