#include <napi.h>
#include<windows.h>

Napi::Value Press(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 2) {
    Napi::Error::New(env, "Invalid arguments").ThrowAsJavaScriptException();
    return env.Null();
  }

  if (!info[0].IsNumber() || !info[1].IsNumber()) {
    Napi::TypeError::New(env, "Arguments must be a number").ThrowAsJavaScriptException();
    return env.Null();
  }

  double arg0 = info[0].As<Napi::Number>().DoubleValue();
  double arg1 = info[1].As<Napi::Number>().DoubleValue();
  Napi::Boolean num = Napi::Boolean::New(env, Beep(arg0, arg1));

  return num;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "pressNote"), Napi::Function::New(env, Press));
  return exports;
}

NODE_API_MODULE(piano, Init)