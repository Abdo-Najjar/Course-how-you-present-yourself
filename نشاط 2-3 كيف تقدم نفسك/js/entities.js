  "use strict"
  class Question{
    constructor(content , sulotion , op1 , op2 , op3 , op4){
      this.content = content;
      this.sulotion= sulotion;
      this.op1 = op1;
      this.op2 = op2;
      this.op3 = op3;
      this.op4 = op4;
    }
  }

  var content1 = "يعتمد نجاح العرض على شخصية العارض والتي  تتمثل فيما يلي";
  var sulotion1 ="المظهر ولغة الجسد ونبرة الصوت ولغة التحدث";
  var op11 ="المظهر ولغة الجسد فقط";
  var op21 ="المظهر ولغة الجسد ونبرة الصوت ولغة التحدث";
  var op31 ="اختيار لفة التحدث المناسبة فقط";
  var op41 ="نبرة الصوت المناسبة فقط";

  var content2 = "من بين الأمور الشخصية التي يجب أن تأخذها بعين الاعتبار عند تقديم نفسك من خلال عرض تقدمي ما يلي .............................";
  var sulotion2="استخدام نبرة صوت مناسبة وتغيير النبرة من وقت لآخر";
  var op12 ="استخدام نبرة صوت مرتفعة جدا لتظهر مدى قوتك";
  var op22 ="استخدام نبرة صوت منخفضة جدا";
  var op32 ="استخدام نبرة صوت مناسبة وتغيير النبرة من وقت لآخر";
  var op42 ="استخدام نبرة صوت واحدة طول فترة العرض";

  var content3 = "من ضمن الأخطاء الشائعة عند تحضير العرض التقدمي ما يلي";
  var sulotion3 ="استخدام خط صغير جدا";
  var op13 ="استخدام خط مناسب للكلمات";
  var op23 ="تناسق الألوان الموجودة بالشريحة";
  var op33 ="استخدام خط صغير جدا";
  var op43 ="ان يكون عدد الكلمات في الشريحة مناسب";

  var content4 =  "من ضمن النصائح التي يجب العمل بها لتقديم عرض ناجح ما يلي";
  var sulotion4 = "التحضير والتمرين الجيد على العرض وتجاوز مخاوفك";
  var op14 ="السماح لمخاوفك بالتأثير عليك أثناء العرض";
  var op24 ="التحضير والتمرين الجيد على العرض وتجاوز مخاوفك";
  var op34 ="استخدام لغة وألفاظ صعبة";
  var op44 ="السرعة في التحدث والتسرع في الإجابة على الأسئلة الموجه اليك";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

