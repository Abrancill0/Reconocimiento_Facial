package com.reconocimiento_facial;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
import com.airbnb.android.react.maps.MapsPackage;
=======
import com.rnfs.RNFSPackage;
>>>>>>> 2ef29c7d0bcf2f28fbdd778a4bf78939bfc00d11
import org.reactnative.camera.RNCameraPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new MapsPackage(),
=======
            new RNFSPackage(),
>>>>>>> 2ef29c7d0bcf2f28fbdd778a4bf78939bfc00d11
            new RNCameraPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
