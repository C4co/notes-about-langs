/*
  GENERICS

  https://www.dartlang.org/guides/language/language-tour#generics
*/

/*---------------------------------------
  generic methods
----------------------------------------*/
T check<T>(T arg) {
  return arg;
}

main(List<String> args) {
  check<String>('hello word!');
  check<int>(10);
  check<bool>(true);
}
