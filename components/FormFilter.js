const FormFilter = () => {
  return (
    <div className="form pt-5">
      <div className="row w-100">
        <div className="col-lg-4 col-sm-12">
          <form>
            <select className="form-control">
              <option selected>كل المدن</option>
              <option value="سكاكا">سكاكا</option>
              <option value="عرعر">عرعر</option>
              <option value="جده">جده</option>
              <option value="ابها">ابها</option>
              <option value="نيوم">نيوم</option>
              <option value="الرياض">الرياض</option>
            </select>
          </form>
        </div>
        <div className="col-lg-4 col-sm-12">
          <form>
            <select className="form-control">
              <option>كل المناطق</option>
              <optgroup label="الرياض">
                <option value="منطقة 1 بوليفارد">منطقة 1 بوليفارد</option>
                <option value="منطقة 2 واجهة الرياض">
                  منطقة 2 واجهة الرياض
                </option>
                <option value="منطقة 4 ونتر وندرلاند">
                  منطقة 4 ونتر وندرلاند
                </option>
                <option value="منطقة 5 بوليفارد وورلد">
                  منطقة 5 بوليفارد وورلد
                </option>
              </optgroup>
              <optgroup label="جدة">
                <option value="جدة سوبر دوم">جدة سوبر دوم</option>
                <option value="جدة ويفز">جدة ويفز</option>
              </optgroup>
            </select>
          </form>
        </div>
        <div className="col-lg-4 col-sm-12">
          <form>
            <select className="form-control">
              <option selected>كل الأقسام</option>
              <option value="رياضية">رياضية</option>
              <option value="مسرح">مسرح</option>
              <option value="العاب">العاب</option>
              <option value="عروض ">عروض </option>
              <option value="معارض">معارض</option>
              <option value="سفارى">سفارى</option>
              <option value="عروض كوميدية">عروض كوميدية</option>
              <option value="طبخ حي ">طبخ حي </option>
              <option value="مسابقات">مسابقات</option>
              <option value="سواليف ليلية">سواليف ليلية</option>
              <option value="لايف ميوزك">لايف ميوزك</option>
              <option value="ورش عمل">ورش عمل</option>
              <option value="عروض غنائية">عروض غنائية</option>
              <option value="عروض ادائية">عروض ادائية</option>
              <option value="منتزة">منتزة</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormFilter;
