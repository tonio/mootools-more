/*
Script: Locale.js
	Specs for Locale.js

License:
	MIT-style license.
*/


describe('Locale', function(){

	// In the specs there is only english available
	Locale.define('fr-FR', 'FormValidator', {
		required: 'Ce champ est obligatoire.'
	});

	it('should return english form validator message', function(){
		Locale.use('en-US');
		if (MooTools.lang) expect(MooTools.lang.get('FormValidator', 'required')).toEqual('This field is required.');

		expect(Locale.get('FormValidator.required')).toEqual('This field is required.');
	});

	it('should cascade through to english', function(){
		Locale.use('en-US');
		expect(Locale.get('FormValidator.required')).toEqual('This field is required.');
	});

	it('should return french form validator message', function(){
		Locale.use('fr-FR');

		expect(Locale.get('FormValidator.required')).toEqual('Ce champ est obligatoire.');
	});

	it('should return the correct locale name', function(){
		Locale.use('fr-FR');
		expect(Locale.getCurrent().name).toEqual('fr-FR');
		Locale.use('non-existsing');
		expect(Locale.getCurrent().name).toEqual('fr-FR');
	});

	it('should inherit from other locales', function(){

		Locale.define('nl-NL').inherit('en-US');

		Locale.use('nl-NL');

		Locale.define('nl-NL', 'Number', {
			'foo': 'bar'
		});

		Locale.define('EU').inherit('World');
		Locale.define('World', 'Number', {
			'bar': 'foo'
		}).inherit('EU'); // test for recursion

		Locale.inherit('nl-NL', 'EU', 'Number');

		expect(Locale.get('Number.foo')).toEqual('bar');
		expect(Locale.get('Number.bar')).toEqual('foo');

	});

	it('should return a object when no key is specified', function(){
		var obj = {
			'guten': 'tag'
		};

		Locale.define('de-DE', 'Date', obj);
		Locale.use('de-DE');

		expect(Locale.get('Date')).toEqual(obj);
	});

	describe('MooTools.lang 1.2 specs', function(){

		it('should return english form validator message', function(){
			MooTools.lang.setLanguage('en-US');
			expect(MooTools.lang.get('FormValidator', 'required')).toEqual('This field is required.');
		});

		it('should cascade through to english', function(){
			MooTools.lang.set('en-GB', 'cascade', ['IT', 'ESP', 'gbENG']);
			MooTools.lang.setLanguage('en-GB');
			expect(MooTools.lang.get('FormValidator', 'required')).toEqual('This field is required.');
		});

		it('should return french form validator message', function(){
			MooTools.lang.setLanguage('fr-FR');
			expect(MooTools.lang.get('FormValidator', 'required')).toEqual('Ce champ est obligatoire.');
		});


	});

});
